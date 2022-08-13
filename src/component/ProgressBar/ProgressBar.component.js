import { createRef, PureComponent } from 'react';
import style from './ProgressBar.module.css'


export class ProgressBar extends PureComponent {
    state = {
        value: 0
    }

    componentDidMount(){
        const { stepMap } = this.props;
        const stepsCount = Object.keys(stepMap).length
        
        var steps = 100/stepsCount 
        const interval = setInterval(() => {
            var currentValue = this.state.value
            const newValue = currentValue + 1
            this.setState({ value: newValue});
            if(newValue >= steps){
                
                clearInterval(interval)
                
            }
            return newValue

            
            
    }, 40)}

    
    
    componentDidUpdate(prevProps){
        const { checkoutStep } = this.props;
        const { checkoutStep: prevCheckoutStep } = prevProps;
        var steps = this.state.value * 2
        
        if (checkoutStep !== prevCheckoutStep) {
        
            const interval = setInterval(() => {
                var currentValue = this.state.value
                const newValue = currentValue + 1
                this.setState({ value: newValue});
                if(newValue >= steps){
                    
                    clearInterval(interval)
                    
                }
                return newValue
            }, 30);}     
    
    }
    render(){
        
        const { stepMap } = this.props;
        const stepsCount = Object.keys(stepMap).length
        var steps = 100/stepsCount
        
        return(
            <>
            <div className={style.container}>
                <progress max={100} value={this.state.value}/>
                {Array.from({ length: stepsCount-1 }, (_, i) =>
                 <div style={{"left":`${steps * (i+1)}%`}} className={style.check}>
                    <div>
                        <div>
                            {i+1}
                        </div>
                    
                    </div>
                 <span>{Object.keys(stepMap)[i]}</span>
                </div>
                 )
                 }    
            </div>
            </>
        )
    }
}
export default ProgressBar;