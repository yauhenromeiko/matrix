import React from 'react';

import './CirclesToMatrix';

export const CirclesToMatrix = ({curLang, combinations, className, ...restProps}) => {
console.log(combinations)
    return(
        <>
        {combinations && (
            <>
        {combinations.a && (<div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-a -purple -active">{combinations.a}</div>)}
        
        {combinations.a2 && (<div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-a2 -blue -active">{combinations.a2 || ''}</div>)}
        
        {combinations.a1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a1 -cyan -active">{combinations.a1 || ''}</div>)}
        
        {combinations.a3 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a3 -green -active">{combinations.a3 || ''}</div>)}
        
        {combinations.b && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-b -purple -active">{combinations.b || ''}</div>)}
        
        {combinations.b2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-b2 -blue -active">{combinations.b2 || ''}</div>)}
        
        {combinations.b1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b1 -cyan -active">{combinations.b1 || ''}</div>)}
        
        {combinations.b3 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b3 -green -active">{combinations.b3 || ''}</div>)}
        
        {combinations.c && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-c -red -active" >{combinations.c || ''}</div>)}
        
        {combinations.c2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-c2 -white -active">{combinations.c2 || ''}</div>)}
        
        {combinations.c1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-c1 -orange -active">{combinations.c1 || ''}</div>)}
        
        {combinations.d && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-d -red -active" >{combinations.d || ''}</div>)}
        
        {combinations.d2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-d2 -white -active">{combinations.d2 || ''}</div>)}
        
        {combinations.d1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-d1 -orange -active">{combinations.d1 || ''}</div>)}
        
        {combinations.e && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-e -yellow -active">{combinations.e || ''}</div>)}
        
        {combinations.e1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-e1 -white -active">{combinations.e1 || ''}</div>)}
        
        {combinations.e2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-e2 -white -active">{combinations.e2 || ''}</div>)}
        
        {combinations.f && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-f -white -active">{combinations.f || ''}</div>)}
        
        {combinations.g && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-g -white -active">{combinations.g || ''}</div>)}
        
        {combinations.y && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-y -white -active">{combinations.y || ''}</div>)}
        
        {combinations.p1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p1 -white -active">{combinations.p1 || ''}</div>)}
        
        {combinations.p2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p2 -white -active">{combinations.p2 || ''}</div>)}
        
        {combinations.p3 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p3 -white -active">{combinations.p3 || ''}</div>)}
        
        {combinations.p4 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p4 -white -active">{combinations.p4 || ''}</div>)}
        
        {combinations.k && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-k -white -active">{combinations.k || ''}</div>)}
        
        {combinations.s1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s1 -white -active">{combinations.s1 || ''}</div>)}
        
        {combinations.s2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s2 -white -active">{combinations.s2 || ''}</div>)}
        
        {combinations.s3 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s3 -white -active">{combinations.s3 || ''}</div>)}
        
        {combinations.s4 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s4 -white -active">{combinations.s4 || ''}</div>)}
        
        {combinations.x && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x -white -active">{combinations.x || ''}</div>)}
        
        {combinations.x1 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x1 -white -active">{combinations.x1 || ''}</div>)}
        
        {combinations.x2 && (
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x2 -white -active">{combinations.x2 || ''}</div>)}
        
        {combinations.b8 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-b8 -active">{combinations.b8 || ''}</div>)}
        
        {combinations.b7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-b7 -active">{combinations.b7 || ''}</div>)}
        
        {combinations.k2 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k2 -active">{combinations.k2 || ''}</div>)}
        
        {combinations.k1 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k1 -bold -active">{combinations.k1 || ''}</div>)}
        
        {combinations.k4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k4 -active">{combinations.k4 || ''}</div>)}
        
        {combinations.k3 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k3 -active">{combinations.k3 || ''}</div>)}
        
        {combinations.k5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k5 -active">{combinations.k5 || ''}</div>)}
        
        {combinations.k8 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k8 -active">{combinations.k8 || ''}</div>)}
        
        {combinations.k7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k7 -active">{combinations.k7 || ''}</div>)}
        
        {combinations.k6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-k6 -active">{combinations.k6 || ''}</div>)}
        
        {combinations.c4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-c4 -bold -active">{combinations.c4 || ''}</div>)}
        
        {combinations.c6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-c6 -active">{combinations.c6 || ''}</div>)}
        
        {combinations.c5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-c5 -active">{combinations.c5 || ''}</div>)}
        
        {combinations.c7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-c7 -active">{combinations.c7 || ''}</div>)}
        
        {combinations.y3 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y3 -active">{combinations.y3 || ''}</div>)}
        
        {combinations.y2 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y2 -active">{combinations.y2 || ''}</div>)}
        
        {combinations.y4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y4 -active">{combinations.y4 || ''}</div>)}
        
        {combinations.y1 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y1 -bold -active">{combinations.y1 || ''}</div>)}
        
        {combinations.y6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y6 -active">{combinations.y6 || ''}</div>)}
        
        {combinations.y5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y5 -active">{combinations.y5 || ''}</div>)}
        
        {combinations.y7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y7 -active">{combinations.y7 || ''}</div>)}
        
        {combinations.d6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-d6 -active">{combinations.d6 || ''}</div>)}
        
        {combinations.y8 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-y8 -active">{combinations.y8 || ''}</div>)}
        
        {combinations.d5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-d5 -active">{combinations.d5 || ''}</div>)}
        
        {combinations.d4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-d4 -bold -active">{combinations.d4 || ''}</div>)}
        
        {combinations.d8 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-d8 -active">{combinations.d8 || ''}</div>)}
        
        {combinations.d7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-d7 -active">{combinations.d7 || ''}</div>)}
        
        {combinations.d9 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-d9 -active">{combinations.d9 || ''}</div>)}
        
        {combinations.g3 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g3 -active">{combinations.g3 || ''}</div>)}
        
        {combinations.g2 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g2 -active">{combinations.g2 || ''}</div>)}
        
        {combinations.g4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g4 -active">{combinations.g4 || ''}</div>)}
        
        {combinations.g1 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g1 -bold -active">{combinations.g1 || ''}</div>)}
        
        {combinations.g7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g7 -active">{combinations.g7 || ''}</div>)}
        
        {combinations.g5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g5 -active">{combinations.g5 || ''}</div>)}
        
        {combinations.g6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-g6 -active">{combinations.g6 || ''}</div>)}
        
        {combinations.t3 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t3 -active">{combinations.t3 || ''}</div>)}
        
        {combinations.t2 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t2 -active">{combinations.t2 || ''}</div>)}
        
        {combinations.t4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t4 -active">{combinations.t4 || ''}</div>)}
        
        {combinations.t1 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t1 -bold -active">{combinations.t1 || ''}</div>)}
        
        {combinations.t6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t6 -active">{combinations.t6 || ''}</div>)}
        
        {combinations.t5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t5 -active">{combinations.t5 || ''}</div>)}
        
        {combinations.t7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-t7 -active">{combinations.t7 || ''}</div>)}
        
        {combinations.a5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-a5 -active">{combinations.a5 || ''}</div>)}
        
        {combinations.a4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-a4 -active">{combinations.a4 || ''}</div>)}
        
        {combinations.a6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-a6 -active">{combinations.a6 || ''}</div>)}
        
        {combinations.f1 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f1 -bold -active">{combinations.f1 || ''}</div>)}
        
        {combinations.f3 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f3 -active">{combinations.f3 || ''}</div>)}
        
        {combinations.f2 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f2 -active">{combinations.f2 || ''}</div>)}
        
        {combinations.f4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f4 -active">{combinations.f4 || ''}</div>)}
        
        {combinations.f7 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f7 -active">{combinations.f7 || ''}</div>)}
        
        {combinations.f6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f6 -active">{combinations.f6 || ''}</div>)}
        
        {combinations.f8 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f8 -active">{combinations.f8 || ''}</div>)}
        
        {combinations.f5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-f5 -bold -active">{combinations.f5 || ''}</div>)}
        
        {combinations.b5 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-b5 -active">{combinations.b5 || ''}</div>)}
        
        {combinations.b4 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-b4 -active">{combinations.b4 || ''}</div>)}
        
        {combinations.b6 && (
        <div className="matrix-diagram__number js-personal-calculation-item -position-b6 -active">{combinations.b6 || ''}</div>)}

        {/* {combinations && Object.keys(combinations).map((item, itemIndex) => (
            <div key={itemIndex} 
                className={`matrix-diagram__circle js-personal-calculation-item -position-${item} -active`}
                data-personal-calculation-position={`${item}`}
            >
                {combinations[item]}
            </div>
        ))} */}
        </>
        )}
      </>
    )
   
}