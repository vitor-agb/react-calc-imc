import { lazy } from "react";
import { getAutomaticTypeDirectiveNames } from "typescript";

export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[],
    yourIMC?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5]},
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9]},
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]},
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height*height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelsCopy: Level = {...levels[i]};
            // Por causa do yourIMC é algo que é criado nahora se não fizer o levelcopy ele vai alterar o levels msm ficando o yourIMC sempre criado la, fazendo com que a div dele sempre apareça, para evitar isso é criado uma copia do levels e apenas ele é alterado assim o yourIMC original é sempre sem nada

            levelsCopy.yourIMC = parseFloat(imc.toFixed(2));
            return levelsCopy;

        }
    }

    return null;
}