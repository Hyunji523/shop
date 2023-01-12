//redux 세팅 스토어생성
import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ //usestate랑 비슷
    //name:'state name', 스테이트 이름
    //initialState : 'value' 값 
    name: 'user',
    initialState:'kim',
    reducers : {
      //이 함수 쓸 때 state 변경됨
      //다른 데서 쓸 수 있게 export해야함
      changeName(state){
        return 'john' + state
      }
    }
})

let stock = createSlice({
  name:'stock',
  initialState:[10,11,12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] ,
  reducers : {
    upCount(state, i){
      let idx = state.findIndex(obj => obj.id===i.payload) //파라미터는 payload붙여
      state[idx].count ++
    },
    addItem(state, a){
      //let item = {id : a.payload.id, name : a.payload.title, count :  1 }
      console.log('아이템: ' + a.payload);
      state.push(a.payload); //주문하기
    }
  }
})
export let { changeName } = user.actions
export let {upCount, addItem} = cart.actions //state변경함수들 남음
export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 