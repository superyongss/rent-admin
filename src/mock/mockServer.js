import Mock from 'mockjs'

Mock.mock(
    '/api/v1/tenants',
    'get',
    {
        code: 200,
        'data|10-20': [
            {
                // id: '@id',
                name: '@cname',
                date: '@date',
                address: '宏发嘉域',
                'roomNumber': 'A-101',
                'price': '700'
            }
        ]
    }
)

Mock.mock(
    '/api/v1/tenant',
    'post',
    function (options) {
        const {id, name, address} = JSON.parse(options.body);
        console.log(id, name, address)
        return Mock.mock({
            code: 200,
            data: {
                id: id,
                name: name,
                date: '@date',
                'age|18-60': 1,
                // phone
                'phone|1': /^1[3456789]\d{9}$/,
                // email
                'email|1': /[a-z0-9]{5,10}@[a-z]{2,5}\.[a-z]{2,3}/,
                'gender|1': ['男', '女'],
                'roomType': '单间',
                'price': 700,
                'roomNumber': 'A-101',
                'address': '宏发嘉域'
            }
        })
    }
)

Mock.setup({ timeout: 1000 });