// /   <reference types='Cypress' />

function clearCompRegister() {
  cy.get('[data-test="inputEmail"]').clear();
  cy.get('[data-test="inputPassword"]').clear();
  cy.get('[data-test="inputPasswordConfirm"]').clear();
}

context("Story ordering - Register to ConfirmEmail", () => {
  // เรื่อง
  describe("Register", function() {
    it("ตรวจสอบปุ่มลงทะเบียน", function() {
      cy.visit("http://localhost:3000/signup");
      cy.get('[data-test="inputEmail"]').should("have.exist");
      cy.get('[data-test="inputPassword"]').should("have.exist");
      cy.get('[data-test="inputPasswordConfirm"]').should("have.exist");
      cy.get('[data-test="btnSubmit"]').should("have.exist");
    });

    it("ลงทะเบียนไม่สำเร็จ กรุณาใส่ email", function() {
      clearCompRegister();
      cy.get('[data-test="inputPassword"]').type("xxxxxxxxx");
      cy.get('[data-test="inputPasswordConfirm"]').type("xxxxxxxxxxxx");
      cy.get('[data-test="btnSubmit"]').click();
      cy.get("label").contains("กรุณาใส่ email");
    });

    it("ลงทะเบียนไม่สำเร็จ email ไม่ถูกต้อง", function() {
      clearCompRegister();
      cy.get('[data-test="inputEmail"]').type("tessdfdfsdfsdfs");
      cy.get('[data-test="inputPassword"]').type("xxxxxxxxx");
      cy.get('[data-test="inputPasswordConfirm"]').type("xxxxxxxxxxxx");
      cy.get('[data-test="btnSubmit"]').click();
      cy.get("label").contains("คุณใส่ email ไม่ถูกต้อง");
    });

    it("ลงทะเบียนไม่สำเร็จ กรุณาใส่รหัสผ่าน", function() {
      clearCompRegister();
      cy.get('[data-test="inputEmail"]').type("test@email.com");
      cy.get('[data-test="inputPasswordConfirm"]').type("xxxxxxxxxxxx");
      cy.get('[data-test="btnSubmit"]').click();
      cy.get("label").contains("กรุณาใส่รหัสผ่าน");
    });

    it("ลงทะเบียนไม่สำเร็จ ยืนยันรหัสผ่านไม่ถูกต้อง", function() {
      clearCompRegister();
      cy.get('[data-test="inputEmail"]').type("test@email.com");
      cy.get('[data-test="inputPassword"]').type("12345678");
      cy.get('[data-test="inputPasswordConfirm"]').type("xxxxxxxx");
      cy.get('[data-test="btnSubmit"]').click();
      cy.get("label").contains("คุณยืนยันรหัสผ่านไม่ถูกต้อง");
    });

    it("ลงทะเบียนไม่สำเร็จ มีผู้ใช้อีเมล์นี้แล้ว", function() {
      clearCompRegister();
      cy.get('[data-test="inputEmail"]').type("test@email.com");
      cy.get('[data-test="inputPassword"]').type("12345678");
      cy.get('[data-test="inputPasswordConfirm"]').type("12345678");
      cy.get('[data-test="btnSubmit"]').click();
      cy.get("h4").contains("สมัครสมาชิกไม่สำเร็จ");
    });

    it("ลงทะเบียนสำเร็จ", function() {
      clearCompRegister();
      cy.get('[data-test="inputEmail"]').type("success@email.com");
      cy.get('[data-test="inputPassword"]').type("12345678");
      cy.get('[data-test="inputPasswordConfirm"]').type("12345678");
      cy.get('[data-test="btnSubmit"]').click();
      cy.get("h4").contains("สมัครสมาชิกสำเร็จ");
    });
  });
});
