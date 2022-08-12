import { createRef, PureComponent } from 'react';
import style from './ProgressBar.module.css'
import { BILLING_STEP, SHIPPING_STEP } from 'Route/Checkout/Checkout.config';

export class ProgressBar extends PureComponent {
    state = {
        value: 0
    }

    componentDidMount(){
        const { stepsCount } = this.props;
        var steps = 100/stepsCount 
        const interval = setInterval(() => {
            var bb = this.state.value
            const cv = bb + 1
            this.setState({ value: cv});
            if(cv >= steps){
                
                clearInterval(interval)
                
            }
            return cv

            
            
    }, 40)}

    
    
    componentDidUpdate(prevProps){
        const { checkoutStep, stepsCount } = this.props;
        const { checkoutStep: prevCheckoutStep } = prevProps;
        var steps = this.state.value * 2
        
        if (checkoutStep !== prevCheckoutStep) {
        
            const interval = setInterval(() => {
                var bb = this.state.value
                const cv = bb + 1
                this.setState({ value: cv});
                if(cv >= steps){
                    
                    clearInterval(interval)
                    
                }
                return cv
            }, 30);}     
    
    }
    render(){
        
        const { stepsCount, checkoutStep } = this.props;
        var steps = 100/stepsCount
        
        return(
            <>
            <div className={style.container}>
                <progress max={100} value={this.state.value}/>
                {/* {checkoutStep.map(function(item, index){
                    return(
                        <div style={{"left":`${steps}%`}} className={style.firstCheck}>
                        <div>
                            <div>
                                1
                            </div>
                        
                        </div>
                        <span>Shipping</span>
                    </div>
                    )
                })} */}
                <div style={{"left":`${steps}%`}} className={style.firstCheck}>
                        <div>
                            <div>
                                1
                            </div>
                        
                        </div>
                        <span>Shipping</span>
                    </div>
                    <div style={{"left":`${steps * 2}%`}} className={style.secondCheck}>
                        <div>
                            <div>
                                2
                            </div>
                        </div>
                        <span>Review & Payments</span>
                    </div>
                    
            </div>
            </>
        )
    }
}
export default ProgressBar;