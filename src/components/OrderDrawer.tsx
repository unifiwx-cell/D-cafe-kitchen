import { useState } from 'react';
import { X, Trash2, Plus, Minus, CheckCircle, Clock, ShoppingBag, Utensils, ArrowRight } from 'lucide-react';
import { useRestaurant } from '../context/RestaurantContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function OrderDrawer() {
  const {
    cart,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
    isOrderDrawerOpen,
    setIsOrderDrawerOpen,
  } = useRestaurant();

  const [orderType, setOrderType] = useState<'delivery' | 'takeaway' | 'dinein'>('dinein');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOrderDrawerOpen) return null;

  const taxes = Math.round(cartTotal * 0.05); // 5% GST
  const packagingFee = orderType === 'dinein' ? 0 : 25;
  const finalTotal = cartTotal + taxes + packagingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const generatedId = `DCK-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);
  };

  const handleClose = () => {
    if (orderPlaced) {
      clearCart();
      setOrderPlaced(false);
    }
    setIsOrderDrawerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e12] border-l border-[#c5a059]/30 text-[#f5f2eb] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#121217]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#c5a059]" />
              <div>
                <h3 className="font-serif text-xl text-[#f5f2eb]">Your Kitchen Order</h3>
                <span className="text-[11px] font-sans text-[#8c8275]">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'} in order bag
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg text-[#8c8275] hover:text-[#f5f2eb] hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {orderPlaced ? (
            /* Order Placed Success View */
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center overflow-y-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="font-devanagari text-sm text-[#c5a059] mb-1">
                आर्डर स्वीकृत
              </span>
              <h4 className="font-serif text-3xl text-[#f5f2eb] mb-2">
                Order Received!
              </h4>
              <p className="font-sans text-xs text-[#b8ac9c] mb-6">
                Order <span className="font-mono text-[#dfc27a] font-semibold">{orderId}</span> has been dispatched to our kitchen team.
              </p>

              <div className="w-full p-4 rounded-xl bg-[#16161c] border border-white/5 text-left text-xs space-y-2.5 mb-6">
                <div className="flex justify-between text-[#8c8275]">
                  <span>Order Type:</span>
                  <span className="text-[#f5f2eb] capitalize font-medium">{orderType}</span>
                </div>
                <div className="flex justify-between text-[#8c8275]">
                  <span>Guest:</span>
                  <span className="text-[#f5f2eb]">{customerName || 'Diner'}</span>
                </div>
                <div className="flex justify-between text-[#8c8275]">
                  <span>Estimated Time:</span>
                  <span className="text-[#dfc27a] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 20–30 Minutes
                  </span>
                </div>
                <div className="flex justify-between text-[#8c8275] pt-2 border-t border-white/5">
                  <span>Total Amount:</span>
                  <span className="text-[#f5f2eb] font-bold text-sm">₹{finalTotal}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#8c8275] mb-6">
                Questions? Call our front desk at <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-[#dfc27a] underline">{RESTAURANT_INFO.phone}</a>.
              </p>

              <button
                onClick={handleClose}
                className="w-full py-3 rounded bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            /* Cart Items & Checkout Form */
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-[#8c8275]">
                  <Utensils className="w-10 h-10 mx-auto text-[#c5a059]/40 mb-3" />
                  <p className="font-serif text-lg text-[#eae4d5] mb-2">Your bag is empty</p>
                  <p className="text-xs max-w-xs mx-auto mb-6">
                    Add our freshly simmered curries, crisp aloo parathas or thalis to begin your order.
                  </p>
                  <button
                    onClick={() => {
                      setIsOrderDrawerOpen(false);
                      const el = document.getElementById('menu');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>Browse Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Order Type Toggle */}
                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#8c8275] block mb-2">
                      Fulfillment Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType('dinein')}
                        className={`py-2 text-xs font-sans rounded border text-center transition-all ${
                          orderType === 'dinein'
                            ? 'bg-[#1e1e24] border-[#c5a059] text-[#dfc27a] font-medium'
                            : 'bg-[#121215] border-white/5 text-[#8c8275] hover:text-[#eae4d5]'
                        }`}
                      >
                        Dine-In
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('takeaway')}
                        className={`py-2 text-xs font-sans rounded border text-center transition-all ${
                          orderType === 'takeaway'
                            ? 'bg-[#1e1e24] border-[#c5a059] text-[#dfc27a] font-medium'
                            : 'bg-[#121215] border-white/5 text-[#8c8275] hover:text-[#eae4d5]'
                        }`}
                      >
                        Takeaway
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`py-2 text-xs font-sans rounded border text-center transition-all ${
                          orderType === 'delivery'
                            ? 'bg-[#1e1e24] border-[#c5a059] text-[#dfc27a] font-medium'
                            : 'bg-[#121215] border-white/5 text-[#8c8275] hover:text-[#eae4d5]'
                        }`}
                      >
                        Delivery
                      </button>
                    </div>
                  </div>

                  {/* Cart Item List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8c8275]">
                      <span>Items</span>
                      <button
                        onClick={clearCart}
                        className="text-[11px] text-rose-400 hover:underline"
                      >
                        Clear All
                      </button>
                    </div>

                    {cart.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-lg bg-[#141418] border border-white/5 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-base text-[#f5f2eb] truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#c5a059] font-mono tabular-nums">
                            ₹{item.price} each
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 bg-[#1b1b22] px-2 py-1 rounded border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-[#8c8275] hover:text-[#f5f2eb]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-medium text-[#f5f2eb] px-1 tabular-nums">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-[#8c8275] hover:text-[#f5f2eb]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-base font-semibold text-[#f5f2eb] tabular-nums min-w-[50px] text-right">
                          ₹{item.price * quantity}
                        </span>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#8c8275] hover:text-rose-400 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handlePlaceOrder} id="order-form" className="space-y-4 pt-4 border-t border-white/5">
                    <div>
                      <label className="text-[11px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 focus:border-[#c5a059] focus:outline-none text-[#f5f2eb]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 085959 55905"
                        className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 focus:border-[#c5a059] focus:outline-none text-[#f5f2eb]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                        {orderType === 'dinein' ? 'Table Number / Area' : 'Delivery Address in Tajganj / Agra'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={addressOrTable}
                        onChange={(e) => setAddressOrTable(e.target.value)}
                        placeholder={
                          orderType === 'dinein'
                            ? 'e.g. Table 4 / Patio'
                            : 'Room no., Hotel name or Street address'
                        }
                        className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 focus:border-[#c5a059] focus:outline-none text-[#f5f2eb]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-sans tracking-wider uppercase text-[#8c8275] block mb-1">
                        Kitchen Requests / Spice Preference (Optional)
                      </label>
                      <input
                        type="text"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="e.g. Mild spice, extra crispy paratha, no onion"
                        className="w-full px-3 py-2 text-xs rounded bg-[#16161c] border border-white/10 focus:border-[#c5a059] focus:outline-none text-[#f5f2eb]"
                      />
                    </div>
                  </form>

                  {/* Summary Breakdown */}
                  <div className="p-4 rounded-xl bg-[#141418] border border-white/5 space-y-2 text-xs">
                    <div className="flex justify-between text-[#8c8275]">
                      <span>Subtotal</span>
                      <span className="text-[#f5f2eb] font-mono tabular-nums">₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-[#8c8275]">
                      <span>GST (5%)</span>
                      <span className="text-[#f5f2eb] font-mono tabular-nums">₹{taxes}</span>
                    </div>
                    {packagingFee > 0 && (
                      <div className="flex justify-between text-[#8c8275]">
                        <span>Eco-Friendly Packaging</span>
                        <span className="text-[#f5f2eb] font-mono tabular-nums">₹{packagingFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#dfc27a] font-serif text-base font-semibold pt-2 border-t border-white/5">
                      <span>Total</span>
                      <span className="tabular-nums">₹{finalTotal}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Footer Submit */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-6 border-t border-white/5 bg-[#121217]">
              <button
                type="submit"
                form="order-form"
                className="w-full py-3.5 rounded bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:brightness-110 shadow-lg transition-all"
              >
                Place Order · ₹{finalTotal}
              </button>
              <p className="text-[10px] text-center text-[#8c8275] mt-2">
                Cash on Delivery or UPI on arrival accepted
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
