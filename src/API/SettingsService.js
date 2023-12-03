import axios from "axios";

export default class SettingsService {
  static async getRegions() {
    return await axios.get("/settings/manage/get_region");
  }
  static async addRegion(name) {
    return await axios.post("/settings/manage/add_region", {
      region_name: name,
    });
  }
  static async deleteRegion(name) {
    return await axios.delete("/settings/manage/delete_region", {
      data: { region_name: name },
    });
  }

  static async getCategories() {
    return await axios.get("/settings/manage/get_categories");
  }
  static async addCategory(name) {
    return await axios.post("/settings/manage/add_category", {
      category_name: name,
    });
  }
  static async deleteCategory(name) {
    return await axios.delete("/settings/manage/delete/category", {
      data: { category_name: name },
    });
  }

  static async getProducts(name) {
    return await axios.get("/settings/manage/get_prod", {
      params: { name_categories: name },
    });
  }
  static async addProduct(category, name) {
    return await axios.post("/settings/manage/add_product", {
      prod_category: category,
      prod_name: name,
    });
  }
  static async deleteProduct(category, name) {
    return await axios.delete("/settings/manage/delete/prod", {
      data: { prod_category: category, prod_name: name },
    });
  }

  static async setCharLimit(limit) {
    return await axios.post(
      "/settings/manage/max_char",
      {},
      {
        params: { value: limit },
      }
    );
  }

  static async getImage() {
    return await axios
      .get(
        "/check-file",
        { responseType: "blob" },
        { headers: { "Cache-Control": "no-cache" } }
      )
      .then((response) => {
        if (response.headers["content-type"] !== "image/png") return null;
        return URL.createObjectURL(response.data);
      });
  }
  static async postImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    return await axios
      .post("/upload-file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .catch((error) => {
        console.log(error);
      });
  }
  static async deleteImage() {
    return await axios.delete("/delete-file");
  }

  static async postCost(value) {
    return await axios.post(
      "/settings/cost/update_cost",
      {},
      {
        params: { value: value },
      }
    );
  }
  static async postCostSub(value) {
    return await axios.post(
      "/settings/cost/update_costsub",
      {},
      {
        params: { value: value },
      }
    );
  }
}
