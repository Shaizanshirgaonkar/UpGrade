import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//  @desc create new order
//  @route POST/api/orders
//  @access Public
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

//  @desc create new order
//  @route GET/api/orders/myorders
//  @access Public
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

//  @desc get order by ID
//  @route GET/api/orders/:id
//  @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

//  @desc update order to paid
//  @route GET/api/orders/:id/pay
//  @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

//  @desc update order to delivered
//  @route GET/api/orders/:id/deliver
//  @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

//  @desc Get all orders
//  @route GET/api/orders
//  @access Private/dmin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
