import { RentalsDatabase } from './RentalsDatabase/Database';

class Entity<T> implements IEntity<T> {
  constructor(protected client: IEntity) {}

  async get() {
    return this.client.get();
  }

  getById(id: string) {
    return this.client.getById(id);
  }

  create(data: Partial<T>) {
    return this.client.create(data);
  }

  update(id: string, data: Partial<T>) {
    return this.client.update(id, data);
  }

  delete(id: string) {
    return this.client.delete(id);
  }
}

const repos = {
  accounts: new Entity(new RentalsDatabase('account')),
  languages: new Entity(new RentalsDatabase('language')),
  groups: new Entity(new RentalsDatabase('group')),
  paidPlans: new Entity(new RentalsDatabase('paid_plan')),
  currencies: new Entity(new RentalsDatabase('currency')),
  colorThemes: new Entity(new RentalsDatabase('color_theme')),
  estates: new Entity(new RentalsDatabase('estate')),
  countries: new Entity(new RentalsDatabase('country')),
  cities: new Entity(new RentalsDatabase('city')),
  regions: new Entity(new RentalsDatabase('region')),
  managingCompanies: new Entity(new RentalsDatabase('managing_company')),
  invoices: new Entity(new RentalsDatabase('invoice')),
  costs: new Entity(new RentalsDatabase('cost')),
};

export default repos;
