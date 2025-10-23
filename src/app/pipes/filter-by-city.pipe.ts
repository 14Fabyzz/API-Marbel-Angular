import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCity',
  standalone: false
})
export class FilterByCityPipe implements PipeTransform {

  transform(users: any[], city: string): any[] {
    
    if (!users) return [];
    if (!city) return users;

    city = city.toLowerCase();

    return users.filter(user => {
      return user.address && user.address.city && user.address.city.toLowerCase().includes(city);

    });

  }

}
