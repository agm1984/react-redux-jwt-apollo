// import React, { Component } from 'react'
// import { graphql } from 'react-apollo'
// import { Link } from 'react-router'
// import {
//     Sparklines,
//     SparklinesLine,
//     SparklinesReferenceLine
// } from 'react-sparklines'

// import CURRENT_USER_QUERY from '../queries/CurrentUser'

// class Dashboard extends Component {
//     render() {
//         // if (!this.props.data.e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845) return <div>Loading...</div>
//         // const { e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845 } = this.props.data
//         // const wallet = {
//         //     email: e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845.b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18,
//         //     created: e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845.d7bc3926788d8c54f1bc5a764b86f623cc0e0fb728c63fa746d9b65dae1c40f2,
//         //     serial: e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845.d9b818eaee72165e03cfbd2b1a908efce1c1432a2b8cf88030a7fcd69804a1e3,
//         //     status: e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845.e94de50746a8176bd0e0305f8c9bd1541bdef6020ebd97e26ce739d9272f8a9d,
//         //     tel: e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845.ff922304a15c7267fe1375923dd2825a999a00a7ff2aaf4ee3edab6c67a9a610
//         // }

//         const genRand = (low, high) => Math.floor(Math.random() * high) + low
//         let arr1 = []
//         let arr2 = []
//         for (let i = 0; i < genRand(1,100); i++) {
//             arr1.push(genRand(1, 1000))
//         }
//         for (let i = 0; i < genRand(1, 100); i++) {
//             arr2.push(genRand(1, 1000))
//         }

//         const style = {
//             maxHeight: "100px",
//             maxWidth: "180px"
//         }

//         const wallet = {
//             email: 'test@test.com',
//             created: 45235234534,
//             serial: '256b45h6hn4545nhs4e45n45n',
//             status: 'Active',
//             tel: '555-555-5555'
//         }

//         console.log('USER IS AUTHENTICATED', this.props.authenticated)
//         return <div>asdf</div>
//         // return (
//         //     <div>
//         //         <Link to="/" className="btn">Back</Link>
//         //         <h3>Your Wallet</h3>
//         //         <ul className="collection z-depth-3">
//         //             <li className="collection-item brown lighten-5"><div><strong>Email</strong></div><div>{wallet.email}</div></li>
//         //             <li className="collection-item brown lighten-5"><div><strong>Created</strong></div><div>{wallet.created}</div></li>
//         //             <li className="collection-item brown lighten-5"><div><strong>Serial</strong></div><div>{wallet.serial}</div></li>
//         //             <li className="collection-item brown lighten-5"><div><strong>Status</strong></div><div>{wallet.status}</div></li>
//         //             <li className="collection-item brown lighten-5"><div><strong>Tel</strong></div><div>{wallet.tel}</div></li>
//         //         </ul>
//         //         <div className="row">
//         //             <div className="col s6">
//         //                 <strong>Monthly Spending</strong>
//         //                 <Sparklines height={100} width={180} data={arr1} style={style}>
//         //                     <SparklinesLine color="red" />
//         //                     <SparklinesReferenceLine type="avg" />
//         //                 </Sparklines>
//         //             </div>
//         //             <div className="col s6">
//         //                 <strong>Monthly Earning</strong>
//         //                 <Sparklines height={100} width={180} data={arr2} style={style}>
//         //                     <SparklinesLine color="green" />
//         //                     <SparklinesReferenceLine type="avg" />
//         //                 </Sparklines>
//         //             </div>
//         //         </div>
//         //     </div>
//         // )
//     }
// }

// export default graphql(CURRENT_USER_QUERY)(Dashboard)