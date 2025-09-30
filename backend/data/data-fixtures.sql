-- Insert Categories
INSERT INTO categories (name, description) VALUES
('Burger', 'Juicy grilled burgers with fresh ingredients'),
('Pizza', 'Delicious hand-crafted pizzas with a variety of toppings'),
('Cup Cake', 'Sweet and flavorful cupcakes with various frostings'),
('Ramen', 'Hot and savory ramen noodles with rich broth and toppings');

-- Insert Products
INSERT INTO products (category_id, name, description, image, price, status) VALUES
(1, 'Classic Burger', 'Beef patty with lettuce, tomato, and cheese', 'classic_burger.jpg', 7.49, 'available'),
(1, 'Cheese Burger', 'Beef patty with melted cheese and pickles', 'cheese_burger.jpg', 8.49, 'available'),
(1, 'Veggie Burger', 'Vegetarian patty with avocado and lettuce', 'veggie_burger.jpg', 6.99, 'available'),
(2, 'Margherita Pizza', 'Classic pizza with mozzarella cheese and tomato sauce', 'margherita.jpg', 8.99, 'available'),
(2, 'Pepperoni Pizza', 'Pizza topped with pepperoni and mozzarella cheese', 'pepperoni.jpg', 9.99, 'available'),
(2, 'BBQ Chicken Pizza', 'Pizza with BBQ sauce, grilled chicken, and onions', 'bbq_chicken.jpg', 10.49, 'available'),
(3, 'Chocolate Cup Cake', 'Rich chocolate cake with chocolate frosting', 'chocolate_cupcake.jpg', 2.99, 'available'),
(3, 'Vanilla Cup Cake', 'Light and fluffy vanilla cake with creamy frosting', 'vanilla_cupcake.jpg', 2.79, 'available'),
(3, 'Red Velvet Cup Cake', 'Moist red velvet cake with cream cheese frosting', 'red_velvet.jpg', 3.29, 'available'),
(4, 'Shoyu Ramen', 'Ramen noodles with soy-based broth, pork, and egg', 'shoyu_ramen.jpg', 12.99, 'available'),
(4, 'Miso Ramen', 'Ramen with miso-based broth, chicken, and vegetables', 'miso_ramen.jpg', 13.49, 'available');

-- Insert Users
INSERT INTO users (first_name, last_name, email, password, role, address, phone) VALUES
('Alice', 'Smith', 'alice@example.com', 'hashedpassword1', 'user', '123 Maple St', '123-456-7890'),
('Bob', 'Johnson', 'bob@example.com', 'hashedpassword2', 'admin', '456 Oak Ave', '987-654-3210'),
('Charlie', 'Davis', 'charlie@example.com', 'hashedpassword3', 'user', '789 Pine Rd', '555-123-4567');

-- Insert Orders
INSERT INTO orders (user_id, total, status) VALUES
(1, 18.48, 'pending'),
(2, 9.99, 'delivered'),
(3, 22.78, 'in_progress');

-- Insert Order Items
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 2, 1, 8.99), -- Margherita Pizza
(1, 4, 1, 7.49), -- Classic Burger
(2, 5, 1, 9.99), -- Pepperoni Pizza
(3, 6, 2, 10.49); -- BBQ Chicken Pizza

-- Insert Product Images (optional)
INSERT INTO product_images (product_id, image_url) VALUES
(1, 'classic_burger_1.jpg'),
(1, 'classic_burger_2.jpg'),
(2, 'margherita_1.jpg'),
(3, 'chocolate_cupcake_1.jpg'),
(4, 'shoyu_ramen_1.jpg');

-- Insert Extras
INSERT INTO extras (name, price, description) VALUES
('Extra Cheese', 1.50, 'Melted cheese topping for your pizza or burger'),
('Bacon', 2.00, 'Crispy bacon strips to add to your burger'),
('Avocado', 1.00, 'Fresh avocado slices to add to your burger or ramen');

-- Insert Product-Extra Relations
INSERT INTO product_extra (product_id, extra_id) VALUES
(2, 1), -- Margherita Pizza + Extra Cheese
(4, 2), -- Classic Burger + Bacon
(6, 3); -- BBQ Chicken Pizza + Avocado

INSERT INTO contact_messages (name, email, message) VALUES
('Alice Dupont', 'alice.dupont@example.com', 'Bonjour, je voulais savoir si vous livrez dans le 18e arrondissement ?'),
('Marc Lemoine', 'marc.lemoine@example.com', 'Très satisfait de ma commande. Merci pour la rapidité !'),
('Claire Fontaine', 'claire.fontaine@example.com', 'Est-ce que vous proposez des options végétariennes ?'),
('Nicolas Bernard', 'nicolas.bernard@example.com', 'J’ai rencontré un problème de paiement, pouvez-vous m’aider ?'),
('Sophie Martin', 'sophie.martin@example.com', 'Merci pour les cupcakes, ils étaient délicieux !');
