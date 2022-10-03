import { FindManyOptions, Repository } from "typeorm";
import { OrderEdit } from "../models/order-edit";
export declare class OrderEditRepository extends Repository<OrderEdit> {
    findWithRelations(relations?: (keyof OrderEdit | string)[], idsOrOptionsWithoutRelations?: Omit<FindManyOptions<OrderEdit>, "relations"> | string[]): Promise<[OrderEdit[], number]>;
    findOneWithRelations(relations?: Array<keyof OrderEdit>, optionsWithoutRelations?: Omit<FindManyOptions<OrderEdit>, "relations">): Promise<OrderEdit>;
}
