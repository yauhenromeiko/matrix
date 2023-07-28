import React from 'react';

import './CirclesToMatrix';

export const CirclesToMatrix = ({curLang, combinations, className, ...restProps}) => {
console.log(combinations)
    return(
        <>
        {combinations && (
            <>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-a -purple -active" data-personal-calculation-position="a">{combinations.a || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-a2 -blue -active" data-personal-calculation-position="a2">{combinations.a2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a1 -cyan -active" data-personal-calculation-position="a1">{combinations.a1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a3 -green -active" data-personal-calculation-position="a3">{combinations.a3 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-b -purple -active" data-personal-calculation-position="b">{combinations.b || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-b2 -blue -active" data-personal-calculation-position="b2">{combinations.b2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b1 -cyan -active" data-personal-calculation-position="b1">{combinations.b1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b3 -green -active" data-personal-calculation-position="b3">{combinations.b3 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-c -red -active" data-personal-calculation-position="c">{combinations.c || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-c2 -white -active" data-personal-calculation-position="c2">{combinations.c2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-c1 -orange -active" data-personal-calculation-position="c1">{combinations.c1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-d -red -active" data-personal-calculation-position="d">{combinations.d || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-d2 -white -active" data-personal-calculation-position="d2">{combinations.d2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-d1 -orange -active" data-personal-calculation-position="d1">{combinations.d1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-e -yellow -active" data-personal-calculation-position="e">{combinations.e || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-e1 -white -active" data-personal-calculation-position="e1">{combinations.e1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-e2 -white -active" data-personal-calculation-position="e2">{combinations.e2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-f -white -active" data-personal-calculation-position="f">{combinations.f || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-g -white -active" data-personal-calculation-position="g">{combinations.g || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-y -white -active" data-personal-calculation-position="y">{combinations.y || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p1 -white -active" data-personal-calculation-position="p1">{combinations.p1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p2 -white -active" data-personal-calculation-position="p2">{combinations.p2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p3 -white -active" data-personal-calculation-position="p3">{combinations.p3 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p4 -white -active" data-personal-calculation-position="p4">{combinations.p4 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-k -white -active" data-personal-calculation-position="k">{combinations.k || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s1 -white -active" data-personal-calculation-position="s1">{combinations.s1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s2 -white -active" data-personal-calculation-position="s2">{combinations.s2 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s3 -white -active" data-personal-calculation-position="s3">{combinations.s3 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s4 -white -active" data-personal-calculation-position="s4">{combinations.s4 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x -white -active" data-personal-calculation-position="x">{combinations.x || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x1 -white -active" data-personal-calculation-position="x1">{combinations.x1 || ''}</div>
        <div className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x2 -white -active" data-personal-calculation-position="x2">{combinations.x2 || ''}</div>

       
        <div className="matrix-diagram__number js-personal-calculation-item -position-b8 -active" data-personal-calculation-position="b8">{combinations.b8 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-b7 -active" data-personal-calculation-position="b7">{combinations.b7 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k2 -active" data-personal-calculation-position="k2">{combinations.k2 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k1 -bold -active" data-personal-calculation-position="k1">{combinations.k1 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k4 -active" data-personal-calculation-position="k4">{combinations.k4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k3 -active" data-personal-calculation-position="k3">{combinations.k3 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k5 -active" data-personal-calculation-position="k5">{combinations.k5 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-k8 -active" data-personal-calculation-position="k8">{combinations.k8 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k7 -active" data-personal-calculation-position="k7">{combinations.k7 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-k6 -active" data-personal-calculation-position="k6">{combinations.k6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-c4 -bold -active" data-personal-calculation-position="c4">{combinations.c4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-c6 -active" data-personal-calculation-position="c6">{combinations.c6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-c5 -active" data-personal-calculation-position="c5">{combinations.c5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-c7 -active" data-personal-calculation-position="c7">{combinations.c7 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-y3 -active" data-personal-calculation-position="y3">{combinations.y3 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y2 -active" data-personal-calculation-position="y2">{combinations.y2 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y4 -active" data-personal-calculation-position="y4">{combinations.y4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y1 -bold -active" data-personal-calculation-position="y1">{combinations.y1 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y6 -active" data-personal-calculation-position="y6">{combinations.y6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y5 -active" data-personal-calculation-position="y5">{combinations.y5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y7 -active" data-personal-calculation-position="y7">{combinations.y7 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-d6 -active" data-personal-calculation-position="d6">{combinations.d6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-y8 -active" data-personal-calculation-position="y8">{combinations.y8 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-d5 -active" data-personal-calculation-position="d5">{combinations.d5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-d4 -bold -active" data-personal-calculation-position="d4">{combinations.d4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-d8 -active" data-personal-calculation-position="d8">{combinations.d8 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-d7 -active" data-personal-calculation-position="d7">{combinations.d7 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-d9 -active" data-personal-calculation-position="d9">{combinations.d9 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-g3 -active" data-personal-calculation-position="g3">{combinations.g3 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-g2 -active" data-personal-calculation-position="g2">{combinations.g2 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-g4 -active" data-personal-calculation-position="g4">{combinations.g4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-g1 -bold -active" data-personal-calculation-position="g1">{combinations.g1 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-g7 -active" data-personal-calculation-position="g7">{combinations.g7 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-g5 -active" data-personal-calculation-position="g5">{combinations.g5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-g6 -active" data-personal-calculation-position="g6">{combinations.g6 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-t3 -active" data-personal-calculation-position="t3">{combinations.t3 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-t2 -active" data-personal-calculation-position="t2">{combinations.t2 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-t4 -active" data-personal-calculation-position="t4">{combinations.t4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-t1 -bold -active" data-personal-calculation-position="t1">{combinations.t1 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-t6 -active" data-personal-calculation-position="t6">{combinations.t6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-t5 -active" data-personal-calculation-position="t5">{combinations.t5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-t7 -active" data-personal-calculation-position="t7">{combinations.t7 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-a5 -active" data-personal-calculation-position="a5">{combinations.a5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-a4 -active" data-personal-calculation-position="a4">{combinations.a4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-a6 -active" data-personal-calculation-position="a6">{combinations.a6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f1 -bold -active" data-personal-calculation-position="f1">{combinations.f1 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f3 -active" data-personal-calculation-position="f3">{combinations.f3 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f2 -active" data-personal-calculation-position="f2">{combinations.f2 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f4 -active" data-personal-calculation-position="f4">{combinations.f4 || ''}</div>

        <div className="matrix-diagram__number js-personal-calculation-item -position-f7 -active" data-personal-calculation-position="f7">{combinations.f7 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f6 -active" data-personal-calculation-position="f6">{combinations.f6 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f8 -active" data-personal-calculation-position="f8">{combinations.f8 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-f5 -bold -active" data-personal-calculation-position="f5">{combinations.f5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-b5 -active" data-personal-calculation-position="b5">{combinations.b5 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-b4 -active" data-personal-calculation-position="b4">{combinations.b4 || ''}</div>
        <div className="matrix-diagram__number js-personal-calculation-item -position-b6 -active" data-personal-calculation-position="b6">{combinations.b6 || ''}</div>
        </>
        )}
      </>
    )
   
}