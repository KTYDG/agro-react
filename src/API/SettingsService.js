import axios from "axios";

export default class SettingsService {
  static async getRegions() {
    const response = await axios.get("/settings/manage/get_region");
    return response;
  }
  static async addRegion(name) {
    const response = await axios.post("/settings/manage/add_region", {
      body: { region_name: name },
    });
    return response;
  }
  static async deleteRegion(name) {
    const response = await axios.delete("/settings/manage/delete_region", {
      body: { region_name: name },
    });
    return response;
  }

  static async getCategories() {
    const response = await axios.get("/settings/manage/get_categories");
    return response;
  }
  static async addCategory(name) {
    const response = await axios.post("/settings/manage/add_category", {
      body: { category_name: name },
    });
    return response;
  }
  static async deleteCategory(name) {
    const response = await axios.delete("/settings/manage/delete/category", {
      body: { category_name: name },
    });
    return response;
  }

  static async getProducts() {
    const response = await axios.get("/settings/manage/get_prod");
    return response;
  }
  static async addProduct(category, name) {
    const response = await axios.post("/settings/manage/add_category", {
      body: { prod_category: category, prod_name: name },
    });
    return response;
  }
  static async deleteProduct(category, name) {
    const response = await axios.delete("/settings/manage/delete/prod", {
      body: { prod_category: category, prod_name: name },
    });
    return response;
  }
}
