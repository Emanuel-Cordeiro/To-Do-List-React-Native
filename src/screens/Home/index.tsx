import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';

import LogoSvg from '../../assets/image/Logo.svg';
import ClipboardSvg from '../../assets/image/Clipboard.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import TaskItem from '../../components/TaskItem';

import {
  Body,
  Header,
  TextEmpty,
  ContainerList,
  ContainerHeaderList,
  ContainerInputButton,
} from './styles';

type TaskProps = {
  id: string;
  isChecked: boolean;
  text: string;
};

const Home = () => {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const [counterCreated, setCounterCreated] = useState(0);
  const [counterConcluded, setCounterConcluded] = useState(0);

  const handleAddTask = () => {
    if (newTask === '') {
      return;
    }

    const maxId =
      taskList.reduce(
        (max, curr) =>
          parseInt(curr.id, 10) > max ? parseInt(curr.id, 10) : max,
        0,
      ) + 1;

    setTaskList([
      ...taskList,
      { id: String(maxId), text: newTask, isChecked: false },
    ]);
    setNewTask('');
    setCounterCreated(counterCreated + 1);
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert('Remover', 'Remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTaskList(prevState => prevState.filter(item => item.id !== id));
          setCounterCreated(counterCreated - 1);

          const object = taskList.find(task => task.id === id) as TaskProps;
          const index = taskList.indexOf(object);

          const taskIsChecked = taskList[index]?.isChecked;

          if (taskIsChecked) {
            setCounterConcluded(counterConcluded - 1);
          }
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  const handleConcludeTask = (index: number) => {
    const updatedTasks = [...taskList];
    const task = updatedTasks[index];

    task.isChecked = !task.isChecked;

    setTaskList(updatedTasks);
    setCounterConcluded(
      task.isChecked ? counterConcluded + 1 : counterConcluded - 1,
    );
  };

  return (
    <>
      <Header>
        <LogoSvg width={110} height={32} />
      </Header>

      <Body>
        <ContainerHeaderList>
          <Counter
            title={'Criadas'}
            textColor={'blue'}
            number={counterCreated}
          />
          <Counter
            title={'Concluídas'}
            textColor={'purple'}
            number={counterConcluded}
          />
        </ContainerHeaderList>

        <FlatList
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TaskItem
              key={item.text}
              text={item.text}
              isChecked={item.isChecked}
              onRemove={() => handleDeleteTask(item.id)}
              onConclude={() => handleConcludeTask(index)}
            />
          )}
          ListEmptyComponent={() => (
            <ContainerList>
              <ClipboardSvg width={56} height={56} />
              <TextEmpty>
                Você ainda não tem tarefas cadastradas {'\n'}
                Crie tarefas e organize seus itens a fazer
              </TextEmpty>
            </ContainerList>
          )}
        />
      </Body>

      <ContainerInputButton>
        <Input value={newTask} onChangeText={setNewTask} />
        <Button onPress={handleAddTask} />
      </ContainerInputButton>
    </>
  );
};

export default Home;
