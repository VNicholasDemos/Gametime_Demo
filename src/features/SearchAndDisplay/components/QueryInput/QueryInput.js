import styles from './QueryInput.module.css'
import magnifying_glass from '../../resources/search.png';

export function QueryInput(props) {
    const { onChange } = props;
  
    return (
        <div className={styles.queryWrapper} >
            <img width='30px' height='30px' src={magnifying_glass} alt={'search'}/>
            <input className={styles.queryInput} onChange={(event) => { onChange(event.target.value)}} /> 
        </div>
    );
  }