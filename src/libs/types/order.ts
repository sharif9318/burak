import { OrderStatus } from "libs/enums/order.enum";
import { ObjectId } from "mongoose";

export interface OrderItem {
  _id: ObjectId;
  itemQuantity: number;
  itemPrice: number;
  orderId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: ObjectId;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  memberId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  // from aggreagations//
  orderItems: OrderItem[];
 }

export interface OrderItemInput {
  orderId: import("mongoose").Schema.Types.ObjectId;
  itemQuantity: number;
  itemPrice: number;
  productId: ObjectId;
}

export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}