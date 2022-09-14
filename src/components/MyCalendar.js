import React from 'react'

import CalendarGrid from './CalendarGrid'

/**
 * 리액트의 데이터 구조는 단방향 위에서 아래로 데이터를 전달해줄 수 있다. 
 * 여기서 받은 매개변수의 명칭은 props이다.
 * 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달해 줄 수 있다. 
 * 
 * 중괄호를 써주는 이유는 자바스크립트 구문을 사용하겠다는 것
 */
const MyCalendar = () => {
  const GRID = 42
  const SEVEN = ["일요일슬퍼", "월요일시러", "화요일시러", "수요일시러", "목요일죠아", "금요일죠아", "토요일죠아"]
  const grids = []
  let dateslist = []
  for (let idx = 0; idx < GRID; idx++) dateslist.push(idx)
  for (let idx = 0; idx < GRID; idx++) grids.push({ idx, className: [], content: [] })

  const dates = grids.map(({ className, content, idx }) => {
    const delayRan = `${parseInt(30 *Math.random())}s`

    if (idx <= 6) {
      className.push("sevenDay")
      content.push(SEVEN[idx])
    } else {
      content.push(dateslist[idx])
    }

    if (idx % 7 === 0 || idx === 0) className.push("red")
    else if (idx === 6 || idx === 13 || idx === 20 || idx === 27 || idx === 34 || idx === 41) className.push("blue")
    else className.push("white")
    className.push("date")

    return <CalendarGrid className={className.join(" ")} content={content.join(" ")} key={idx} delay={delayRan} ></CalendarGrid>

  })


  return (
    <div className="calendar">
      {dates}
    </div >
  )


}


export default MyCalendar