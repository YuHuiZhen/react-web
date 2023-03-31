import instance from './axios'

export function getNewestMV (){
  return instance.get('/mv/first')
}