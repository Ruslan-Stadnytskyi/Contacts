import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, search:string='') {
    return users.filter((post:any)=>{
      return post.name.toLowerCase().includes(search.toLowerCase()) || post.phone.includes(search)
    })
  }

}
