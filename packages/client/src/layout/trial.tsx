
import * as React from 'react';

import Typography from '@mui/material/Typography';


interface COMPONENT {
    Component:any;
}

interface UserInfo {
    name:string;
    phone:number;
    address:string;
    bio:string;
}

type Component = any;

interface DefaultProps extends React.ComponentPropsWithRef<Component>{
    nodes?:string;
    children?:React.ReactNode;
    address?:string;
    isAdmin?:boolean;
    Component?:Component;
    maps:(item:Component) => any; 
}

interface EmployeeProps {
    data: { // 👈️ have to nest properties
      name: string;
      age: number;
      country: string;
    };
  }
interface ButtonProps {
    sum:(a:number,b:number) => number;
    logMessage:(message:string) => void;
    doSomething:(params:any) => any;
    handleClick?:(
        event:React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => void;
}

function Container({sum,logMessage,doSomething}:ButtonProps){
 const sums = sum(10,24);
 const messages = logMessage('Hello world')
 const dosome = doSomething('nice!')
 return <div>Hello Globe ?</div>
}

function App(){
    const sum =(a:number,b:number) => {
      return a + b;
    }

    const logMessage = () => {
      console.log('Hello World')
    }

    return(
        <div>
            <Container  
               sum={sum}
                 logMessage={logMessage}
                    doSomething={logMessage}
                  />
        </div>
    )
}
//   function Compromise(mode:Abs): any {
//       return mode;
//   }
  
//   function Employee({data}: EmployeeProps) {
//     return (
//       <div>
//         <h2>{data.name}</h2>
//         <h2>{data.age}</h2>
//         <h2>{data.country}</h2>
//       </div>
//     );
//   }
  
//   function AfterAll({monospace, gradient,directives}:AbsProps){
//     const modes = { monospace, gradient, directives };
//         return<Compromise  mode={modes} />
//   }