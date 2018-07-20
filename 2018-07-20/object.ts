/**
 * 
 * @param o 
 * 如果想要支持的类型，先定义好，在调用的时候就不会出现报错
 */
declare function create(o: object | number ): void;

create({prop: 0});
create(43);

// create('String');
// create(null);
// create(undefined);
// create(false);
