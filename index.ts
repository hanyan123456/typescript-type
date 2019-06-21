// TypeScript Number
// NaN 实例
// let month = 0
// if (month <= 0 || month >12){
//     month = Number.NaN
//     console.log("月份是：" +month)
// }else {
//     console.log("输入月份数值正确")
// }
// prototype 实例
// function employee (id:number,name:string){
//     this.id=id
//     this.name=name
// }
// let emp = new employee(1,'ssss')
// employee.prototype.email = "123456@qq.com"
// console.log("id是" + emp.id)
// console.log("名字是" + emp.name)
// console.log("邮箱" + emp.email)
//
// TypeScript Array
// let sites:string[];//字符串类型的数组
// sites= ['aaa','bbb','ccc']
// console.log(sites)
// let sites:number[]
// sites=[1,23,4,5,6]
// console.log(sites)
// console.log(sites[3])
//创建数组
// let arr_names:number[]=new Array(4)
// for (var i = 0; i < arr_names.length;i++){
//     arr_names[i]=i*1
//     console.log(arr_names[i])
// }
// let sites:string[]=new Array('aaaa','bbbb','cccc','ddddd')
// for(let i=0;i<sites.length;i++){
//     console.log(sites[i])
// }
// 数组迭代
// let j:any
// let nums:number[]=[1,2,3,4]
// for(j in nums){
//     console.log(nums[j])
// }
// 作为函数的返回值
// function disp():string[]{
//     return new Array('ddd','fff','ggg')
// }
// let sites:string[]=disp()
// for(let i in sites){
//     console.log(sites[i])
// }
// TypeScript 元组
// 元组如果存储的元素数据类型不同，则需要使用元组。元组中允许存储不同类型的元素，元组可以作为参数传递给函数
// let mytuple=[10,'sssss']
// mytuple.forEach(value => {
//     console.log(value)
// });
// console.log(mytuple)
// TypeScript 联合类型
// function disp(name:string|string[]){
//     if(typeof name== 'string'){
//         console.log(name)
//     }else{
//         for(let i=0;i<name.length;i++){
//             console.log(name[i])
//         }
//     }
// }
// disp('gggg')
// disp(['fff','gggg','hhhhh'])
// 联合类型数组
// let arr:number[]|string[];
// let i:number;
// arr=[1,2,3]
// for(i =0;i<arr.length;i++){
//     console.log(arr[i])
// }
// TypeScript 接口
// interface IPerson{
//     firstname:string,
//     lastname:string,
//     sayHi:()=>string
// }
// let customer: IPerson={
//     firstname:'ss',
//     lastname:'ggg',
//     sayHi:():string=>{
//         return 'hi hi'
//     }
// }
// console.log(customer.firstname)
// 接口继承
// 接口继承就是说接口可以通过其他接口来扩展自己。
// Typescript 允许接口继承多个接口。
// 继承使用关键字 extends 
// interface Person{
//     age:number
// }
// interface Musician extends Person{
//     instrument: string   
// }
// let drummer = <Musician>{};
// drummer.age=24
// drummer.instrument='jjjj';
// console.log(drummer.age)
// console.log(drummer.instrument)
// 多继承实例
// interface IParent1{
//     value1:number
// }
// interface IParent2{
//     value2:number
// }
// interface Child extends IParent1, IParent2 { }
// let Iobj: Child = { value1: 12, value2: 23 } 
// console.log(Iobj.value1 + Iobj.value2)
// TypeScript 类
// class Car{
//     engine:string;
//     constructor(engine:string){
//         this.engine=engine
//     }
//     disp():void{
//         console.log(this.engine)
//     }
// }
// const obj =new Car('DDD')
// console.log(obj.engine)