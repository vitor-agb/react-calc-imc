import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


type Props = {
    data: Level
};


export const GridItem = ({ data }: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: data.color}}>
            <div className={styles.gridIcon}>
                {
                /*
                {data.icon === 'up' && <img src={upImage} alt="" width="30" />}
                {data.icon === 'down' && <img src={downImage} alt="" width="30" />}
                PODE SER FEITO DESTA FORMA OU A DA FORMA ABAIXO.
                */
            
                }
                <img src={data.icon === 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>
                {data.title}
            </div>

{/* // abaixo é caso o yourIMC for preenchido, ja que ele é opcional, mas como ao calcular temos resultado exato do IMC, nessa parte ele irá msotrar o resultado na tela de resultado. */}
            {data.yourIMC &&
                <div className={styles.yourImc}>Seu IMC é de {data.yourIMC} kg/m² </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>.
                </>
            </div>
        </div>
    );
}