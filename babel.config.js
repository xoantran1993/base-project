module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // Đường dẫn gốc của mã nguồn
        alias: {
          '@src': './src', // Đường dẫn tương đối từ thư mục gốc
        },
        extensions: ['.ts', '.tsx', '.js'], // Các loại đuôi file cần xem xét
      },
    ],
  ],
}