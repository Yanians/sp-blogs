
import * as React from 'react';
import  { 
  styled, 
  ComponentsOverrides,
  ComponentsVariants,
  alpha, 
  Theme as MuiTheme,
  createTheme, 
  useThemeProps
} from '@mui/material/styles';

import { ButtonGroup, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { defaultProps } from 'recompose';

type Theme = Omit<MuiTheme, "components">

declare module '@mui/material/styles' {

     interface ComponentsNameToClassKey {
       MuiStat: 'root' | 'value' | 'unit',
     }

     interface ComponentsPropsList {
        MuiStat: Partial<RootProps>
     }

interface Components {
      MuiStat?:{
        defaultProps?:ComponentsPropsList['MuiStat'];
        //@ts-ignore
        styleOverrides?:ComponentsOverrides<Theme>['MuiStat'];
        variants?:ComponentsVariants['MuiStat']
      }
     }
}

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

const RootStat = styled('div',{
  name:'MuiStat',
  slot:'root',
})<{ownerState:StateOwnrops}>(({theme, ownerState})=>({
    display:'flex',
    background:`${alpha((theme.vars || theme).palette.grey[200],.85)}`,
    backgroundColor:`${theme.applyDarkStyles({
      background:theme.palette.warning.main,
})}`,
    borderRadius:theme.shape.borderRadius,
    borderColor:theme.palette.primary[600],
    padding:theme.spacing(3,4),
    fontWeight:600,
    fontFamily:theme.typography.fontFamilyCode,
    ...(ownerState.variant === 'outlined' && {
      border:`${theme.palette.divider}`,
    })
}))

const ValueStat = styled('div',{
  name:'MuiStat',
  slot:'root',
})<{ownerState:StateOwnrops}>(({theme, ownerState})=>({
  ...theme.typography.caption,
  fontFamily:theme.typography.fontFamilySystem,
  ...(ownerState.variant === 'outlined' && {
    border:theme.palette.divider,
  }),
}));

const UnitStat = styled('div',{
  name:'MuiStat',
  slot:'root',
})<{ownerState:StateOwnrops}>(({theme, ownerState})=>({
  ...theme.typography.body2,
  fontFamily:theme.typography.fontFamilyCode,
  ...(ownerState.variant === 'outlined' && {
    borderColor:theme.palette.dividerChannel,
    fontFamily:theme.typography.fontFamilySystem,
  })
}));

type RootProps = {
  value:number | string;
  unit:string;
  variant?:'outlined',
}

type StateOwnrops = {
 name?:{},
} & RootProps;


const Stat = React.forwardRef(function stat(inProps:StateOwnrops, ref:any){

  const props = useThemeProps({props:inProps, name:'MuiStat'})

  const { value, unit, variant, ...other } = props;

  const ownerState = { ...props, variant, }
     
    return (
      <RootStat ref={ref} ownerState={ownerState} { ...other}>
          <ValueStat ownerState={ownerState}>{value}</ValueStat>
          <UnitStat ownerState={ownerState}>{unit}</UnitStat>
      </RootStat>
    )
})

//apply the theme

// const theme = createTheme({
//   components:{
//     MuiStat:{
//       styleOverrides:{
//         root:{
//           backgroundColor:'#121212',
//         },
//         value:{
//           color:'#fff',
//         },
//         unit:{
//           color:'#888',
//         }
//       },
//       defaultProps:{
//         variant:'outlined',
//       }
//     }
//   }
// })



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