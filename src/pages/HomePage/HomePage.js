import React from "react";

import { PageContainer } from "../../components/PageContainer/PageContainer";
import { Tariffs } from '../../components/Tariffs/Tariffs';
import { ChildMatrix } from '../../components/ChildMatrix/ChildMatrix';
import { CompatibilityMatrix } from '../../components/CompatibilityMatrix/CompatibilityMatrix';
import { MatrixOfFate } from '../../components/MatrixOfFate/MatrixOfFate';
import { MatrixBottom } from '../../components/MatrixBottom/MatrixBottom';
import { HomeText } from '../../components/HomeText/HomeText';
// import { Typography } from '../../components/shared/Typography/Typography';

export const HomePage = ({...restProps}) => {
    const curLang = restProps.curLang;

    return ( 
        <>
            <PageContainer header="big" {...restProps}>

            <HomeText {...restProps}/>
            <Tariffs {...restProps}/>
            {/* <CompatibilityMatrix {...restProps}/> */}
            {/* <MatrixOfFate {...restProps}/> */}
            <ChildMatrix {...restProps}/>
            <MatrixBottom {...restProps}/>
            </PageContainer>
        </>
    )
}