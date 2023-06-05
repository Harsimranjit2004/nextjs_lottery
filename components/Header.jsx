// import React,{useEffect} from 'react'
// import {useMoralis} from "react-moralis"
// const Header = () => {
//   const {enableWeb3,account,isWeb3Enabled,Moralis,deactivateWeb3,isWeb3EnableLoading} = useMoralis()
  

//   useEffect(()=>{
//     if(isWeb3Enabled) return
//     if(typeof window !== "undefined"){
//       if(window.localStorage.getItem("connected")){
//         enableWeb3()
//       }
//     }
//   },[isWeb3Enabled])

//   useEffect(()=>{
//     Moralis.onAccountChanged((account)=>{
//       console.log( `Account changed to ${account}`)
//       if(account  == null){
//         window.localStorage.removeItem("connected")
//         deactivateWeb3()
//       }
//     })
//   },[])
//   return (
//     <div>
//       {account ?(<div>connnected to {account}</div>) :(<button onClick={async ()=>{await enableWeb3()
//         if(typeof window !== "undefined"){
//           window.localStorage.setItem("connected","injected")
//         }
//       }}
//       disabled={isWeb3EnableLoading}>connnect</button>)}
      
//     </div>
//   )
// }

// export default Header
import React from 'react'
import {ConnectButton} from 'web3uikit'
const Header = () => {
  return (
    <div>
      Decentralized Lottery
      <ConnectButton/>
    </div>
  )
}

export default Header
