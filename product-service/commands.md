    
--CREATE extension if not exists "uuid-ossp";
--
--create table if not exists product (
--    id uuid primary key default uuid_generate_v4(),
--    title text not null,
--    description text,
--    price numeric(6,2)
--)
--
--drop table if exists product
--
--create table if not exists stock (
--    id uuid primary key default uuid_generate_v4(),
--    product_id uuid,
--    count int,
--    constraint product_id foreign key(product_id) references product(id) on delete cascade
--)
--
--drop table if exists stock


--insert into product(title, description, price) values
--    ('Visage', 'Visage is a first-person psychological horror game.', 16.49),
--    ('Pumpkin Jack', 'Pumpkin Jack is a Spooky Scary 3D platformer in which you embody Jack, the Mythical Pumpkin Lord!', 11.59),
--    ('The Witcher® 3: Wild Hunt', 'As war rages on throughout the Northern Realms...', 5.99),
--    ('Ghostrunner', 'Ghostrunner offers a unique single-player experience: fast-paced, violent combat...', 15.99),
--    ('The Dark Pictures Anthology: Little Hope', 'Trapped and isolated in the abandoned town of Little Hope...', 19.99),
--    ('Noita', 'Noita is a magical action roguelite set in a world where every pixel is physically simulated.', 10.49),
--    ('Touhou Endless Dream', 'A bullet hell roguelike game.', 4.49),
--    ('CXuan-Yuan Sword VII', 'Xuan-Yuan Sword VII is an ARPG rooted in Chinese history and mythology.', 16.49),
--    ('The Outer Worlds', 'The Outer Worlds is an award-winning single-player RPG from Obsidian Entertainment and Private Division.', 30.47)
--

--insert into stock (product_id, count) values
--    ((select id from product where title = 'Visage'), 3),
--    ((select id from product where title = 'Pumpkin Jack'), 5),
--    ((select id from product where title = 'The Witcher® 3: Wild Hunt'), 22),
--    ((select id from product where title = 'Ghostrunner'), 11),
--    ((select id from product where title = 'The Dark Pictures Anthology: Little Hope'), 15),
--    ((select id from product where title = 'Noita'), 7),
--    ((select id from product where title = 'CXuan-Yuan Sword VII'), 9),
--    ((select id from product where title = 'Touhou Endless Dream'), 21)



