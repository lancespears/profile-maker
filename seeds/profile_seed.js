exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('profiles').del(),

    knex('profiles').insert({name: 'Lance Spears', description: 'Hoodie distillery salvia forage, direct trade brooklyn keytar organic yr occupy. Mlkshk listicle kale chips narwhal, +1 8-bit single-origin coffee lover', photo: ''})
  );
};
