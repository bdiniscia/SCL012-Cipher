describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");  
    });

    it('debería retornar "tuvwxyzabcdefghijklmnopqrs" para "abcdefghijklmnopqrstuvwxyz" con offset 45', () => {
      assert.equal(cipher.encode(45,"abcdefghijklmnopqrstuvwxyz"),"tuvwxyzabcdefghijklmnopqrs"); 
    });

    it('debería retornar "5678901234" para "0123456789" con offset -15', () => {
      assert.equal(cipher.encode(-15,"0123456789"),"5678901234");
    });

    it('debería retornar "_" para "!" con offset -6', () => {
      assert.equal(cipher.encode(-6,"!"),"_");
    });

    it('debería retornar "Ñ" para "ñ" con offset 3', () => {
      assert.equal(cipher.encode(3,"ñ"),"Ñ");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "tuvwxyzabcdefghijklmnopqrs" con offset 45', () => {
      assert.equal(cipher.decode(45,"tuvwxyzabcdefghijklmnopqrs"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "0123456789" para "5678901234" con offset -15', () => {
      assert.equal(cipher.decode(-15,"5678901234"),"0123456789");
    });

    it('debería retornar "!" para "_" con offset -6', () => {
      assert.equal(cipher.decode(-6,"_"),"!");
    });

    it('debería retornar "ñ" para "Ñ" con offset 3', () => {
      assert.equal(cipher.decode(3,"Ñ"),"ñ");
    });

  });
});