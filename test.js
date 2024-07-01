const tools = require('./common/tools')

// tools.bhash('123456', (err, res) => {
//     console.log(err, res)
// })

tools.bcompare( '123456','$2a$10$Wu5GDRz5KmCNxD3asBGGwewlq2cimtrO1/pLjwyrHa04NuGTdaiJ6', (err, res)=>{ 
    console.log(err, res)
})