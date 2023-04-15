import joi from '@hapi/joi'



const schema = {

    user: joi.object({
        firstName: joi.string().max(100).required(),
        lastName: joi.string().max(100).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] } }),
        password: joi.string().required(),
        cPassword: joi.any().equal(joi.ref('password')).required().label('Confirm password').options({ messages: { 'any.only': '{{#label}} does not match' } }), 
        phone: joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required(),
        gender: joi.string().valid("male", "female", "other").required(),
        age: joi.number().integer().max(80).min(18).required(),
        address: joi.string().max(30).required(),
        city: joi.string().max(25).required(),
        state: joi.string().max(15).required(),
        zip: joi.number().integer().required(),

    })
}

export default schema