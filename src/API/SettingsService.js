import axios from "axios";

export default class SettingsService {
  static async getRegions() {
    const response = await axios.get("/settings/manage/get_reпion");
    return response;
  }
  static async addRegion(name) {
    const response = await axios.post("/settings/manage/add_region", {
      region_name: name,
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
    const response = await axios.post("/settings/manage/add_categor", {
      category_name: name,
    });
    return response;
  }
  static async deleteCategory(name) {
    const response = await axios.delete("/settings/manage/delete/category", {
      data: { category_name: name },
    });
    return response;
  }

  static async getProducts(name) {
    const response = await axios.get("/settings/manage/get_prod", {
      params: { name_categories: name },
    });
    return response;
  }
  static async addProduct(category, name) {
    const response = await axios.post("/settings/manage/add_product", {
      prod_category: category,
      prod_name: name,
    });
    return response;
  }
  static async deleteProduct(category, name) {
    const response = await axios.delete("/settings/manage/delete/prod", {
      data: { prod_category: category, prod_name: name },
    });
    return response;
  }
}
