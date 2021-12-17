 import React, { Component } from 'react';
 import styles from './StopWatch.module.css'
 
 
 class StopWatch extends Component {
   constructor(props){
     super(props);
     this.state = {
       time: new Date(0,0,0,0,0,0,0)
     }
     this.intervalId = null;
   }
  
   tick = () => {
    this.setState((state,props)=>{
      const {time} = state;
      const newTime = new Date(time.getTime()+1000);
      return {time:newTime}
    })
   }

   update = () => {
    this.intervalId = setTimeout(this.tick,1000);
   }
   

   start = () => {
     if(!this.intervalId){
      this.update()
     }  
   }

   stop = () => {
    clearTimeout(this.intervalId);
    this.intervalId = null;
   }
   
   reset = () => {
    this.stop();
    this.setState({time:new Date(0,0,0,0,0,0,0)})
   }

   componentDidMount(){
    this.start() 
   }

   componentDidUpdate(){
    this.update()
   } 

  componentWillUnmount(){
   this.stop()
  }

   render() {
     const {time} = this.state;
     return (
       <article className={styles.container}>
         <h2 className={styles.counter}>{time.toLocaleTimeString('en-GB')}</h2>
         <button className={styles.btn} onClick={this.start}>Start</button>
         <button className={styles.btn} onClick={this.stop}>Stop</button>
         <button className={styles.btn} onClick={this.reset}>Reset</button>
       </article>
     );
   }
 }
 
 export default StopWatch;
 