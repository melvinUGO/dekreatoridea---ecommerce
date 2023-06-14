import PaystackPop from "@paystack/inline-js";

export const handlePayment = (email, amount, router) => {
  const paystack = new PaystackPop();

  paystack.newTransaction({
    key: "pk_test_aa69027aa9cd0d4d8c982dc1928559e94a66e38e",
    email,
    amount: amount * 100,
    metadata: { email },
    onSuccess: (transaction) => {
      // Payment complete! Reference: transaction.reference
      // if (typeof window !== "undefined") {
      //   return (window.location =
      //     "/checkout?success=true&reference=" + transaction.reference);
      // }

      router.push("/success");
    },
    onCancel: () => {
      // user closed popup
    },
  });
};
