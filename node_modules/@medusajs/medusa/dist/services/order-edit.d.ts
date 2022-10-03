import { EntityManager } from "typeorm";
import { FindConfig } from "../types/common";
import { OrderEditRepository } from "../repositories/order-edit";
import { LineItem, OrderEdit } from "../models";
import { TransactionBaseService } from "../interfaces";
import { OrderService } from "./index";
declare type InjectedDependencies = {
    manager: EntityManager;
    orderEditRepository: typeof OrderEditRepository;
    orderService: OrderService;
};
export default class OrderEditService extends TransactionBaseService {
    protected transactionManager_: EntityManager | undefined;
    protected readonly manager_: EntityManager;
    protected readonly orderEditRepository_: typeof OrderEditRepository;
    protected readonly orderService_: OrderService;
    constructor({ manager, orderEditRepository, orderService, }: InjectedDependencies);
    retrieve(orderEditId: string, config?: FindConfig<OrderEdit>): Promise<OrderEdit | never>;
    computeLineItems(orderEditId: string): Promise<{
        items: LineItem[];
        removedItems: LineItem[];
    }>;
}
export {};
