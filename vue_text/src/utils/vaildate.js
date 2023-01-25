export function nameRule(rule, value, callback){
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
      if(value === ''){
        callback(new Error('请输入用户名'))
      }else if(!reg.test(value)){
        callback(new Error('请输入4~10位用户名'))
      }else{
        callback()
      }
}

export function passRule(rule, value, callback){
    let pass = /(^[a-zA-Z0-9]{4,10}$)/
      if(value === ''){
        callback(new Error('请输入密码'))
      }else if(!pass.test(value)){
        callback(new Error('请输入4~10位密码'))
      }else{
        callback()
      }
}