import { useState } from "react";
import type { CartItemType, ItemType } from "@/types/marketplace";

export function useShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item: ItemType) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setShowCart(true);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)));
  };

  return { cartItems, showCart, setShowCart, handleAddToCart, handleRemoveFromCart, handleQuantityChange };
}
