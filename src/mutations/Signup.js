import gql from 'graphql-tag'

export default gql`
    mutation Register(
            $b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18: String!,
            $ff922304a15c7267fe1375923dd2825a999a00a7ff2aaf4ee3edab6c67a9a610: String,
            $da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698: String!
        ) {
        aeabc52c19b3eea18a8103c0a2faa930192335c2f29e67b2617ae6156539f36c(
            b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18: $b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18,
            ff922304a15c7267fe1375923dd2825a999a00a7ff2aaf4ee3edab6c67a9a610: $ff922304a15c7267fe1375923dd2825a999a00a7ff2aaf4ee3edab6c67a9a610,
            da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698: $da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698) {
            c280ad5b00a88677981f9925b0641ea9a8cb8a152a52ed9eaf51205bcc25127b
            d9b818eaee72165e03cfbd2b1a908efce1c1432a2b8cf88030a7fcd69804a1e3
            b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18
            ff922304a15c7267fe1375923dd2825a999a00a7ff2aaf4ee3edab6c67a9a610
            e94de50746a8176bd0e0305f8c9bd1541bdef6020ebd97e26ce739d9272f8a9d
            d7bc3926788d8c54f1bc5a764b86f623cc0e0fb728c63fa746d9b65dae1c40f2
        }
    }
`