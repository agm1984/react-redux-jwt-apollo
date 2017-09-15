import gql from 'graphql-tag'

export default gql`
    query getWallet {
        e004e6efffd51e58f4b8bd6455bcc05c73e736706f3e526b43c413ac0970e845(
            d9b818eaee72165e03cfbd2b1a908efce1c1432a2b8cf88030a7fcd69804a1e3: "${localStorage.getItem('wallet')}"
        ) {
            d9b818eaee72165e03cfbd2b1a908efce1c1432a2b8cf88030a7fcd69804a1e3
            b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18
            ff922304a15c7267fe1375923dd2825a999a00a7ff2aaf4ee3edab6c67a9a610
            e94de50746a8176bd0e0305f8c9bd1541bdef6020ebd97e26ce739d9272f8a9d
            d7bc3926788d8c54f1bc5a764b86f623cc0e0fb728c63fa746d9b65dae1c40f2

        }
    }
`

// d4d0833db0365a455d2765f927a528c10b6d1548ef0290e6091ccd95af131f30 {
//     f6f3c87583e9fc97721c84dbfbf7a184b5f2eba2c80001b2e44c4f3d908bd85a
//     eb8da578c372d49a96dc499ea404d452fd5247c3a04cb80af229fbadd74f6e8f
//     ef74c32196b9b55781e256611de595a3624566c04bd09f02a7c6cff1dcb2921b
// }