class tenantBaseInfo {
  constructor(id, name, address) {
    this.id = id
    this.name = name
    this.address = address
  }
}

class tenantInfo {
    constructor(id, name, address, phone, email) {
        this.id = id
        this.name = name
        this.address = address
        this.phone = phone
        this.email = email
    }

    addInfo(id, name, address, phone, email) {
        this.id = id
        this.name = name
        this.address = address
        this.phone = phone
        this.email = email
    }

    packToObj() {
        return {
            id: this.id,
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email
        }
    }
}

export {tenantBaseInfo, tenantInfo}
