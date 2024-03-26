export const dateParser = (value) => {
    const tanggal = new Date(value);

    // Ekstrak bagian tanggal, bulan, dan tahun
    const tahun = tanggal.getFullYear();
    const bulan = ("0" + (tanggal.getMonth() + 1)).slice(-2); // Tambahkan 1 karena bulan dimulai dari 0
    const hari = ("0" + tanggal.getDate()).slice(-2);

    // Ekstrak bagian waktu
    // const jam = ("0" + tanggal.getHours()).slice(-2);
    // const menit = ("0" + tanggal.getMinutes()).slice(-2);
    // const detik = ("0" + tanggal.getSeconds()).slice(-2);

    // Format tanggal yang lebih mudah dibaca
    // value = hari + "-" + bulan + "-" + tahun + " " + jam + ":" + menit + ":" + detik;
    value = hari + "-" + bulan + "-" + tahun;

    return value;
}