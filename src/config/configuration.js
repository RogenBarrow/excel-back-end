const config = {
    port: process.env.PORT || 5055,
    ExcelAPI: process.env.EXCEL_API || "",
    supabaseKey: process.env.PUBLIC_KEY,
    supabaseUrl: process.env.SUPABASE_URL
  };
  
  module.exports = config;
  