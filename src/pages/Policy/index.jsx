import React from 'react';

const Policy = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 my-10 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Chính sách cửa hàng</h1>

      <section className="mb-6 text-justify">
        <h2 className="text-xl font-semibold mb-2">Gói hàng bị mất hoặc bị đánh cắp</h2>
        <p className="text-gray-700 mb-2">
          Chúng tôi không chịu trách nhiệm đối với các gói hàng bị mất hoặc bị đánh cắp đã xác nhận giao hàng đến địa chỉ đã nhập cho đơn hàng. Khi yêu cầu, chúng tôi sẽ xác nhận giao hàng đến địa chỉ đã cung cấp, ngày giao hàng, thông tin theo dõi và thông tin hãng vận chuyển để khách hàng điều tra.
        </p>
        <p className="text-gray-700 mb-2">
          Nếu thông tin theo dõi cho biết rằng các mặt hàng của bạn đã được giao nhưng bạn chưa nhận được, vui lòng kiểm tra xung quanh khu phố của bạn trong trường hợp một ngôi nhà khác đã nhận nhầm. Nói chuyện với gia đình, bạn cùng phòng, v.v. trong trường hợp họ nhận được thay mặt bạn. Gói hàng cũng có thể đã được để lại cho người quản lý bất động sản hoặc văn phòng chung cư.
        </p>
        <p className="text-gray-700">
          Chúng tôi sẽ luôn cố gắng hết sức để hỗ trợ bạn, nhưng chúng tôi không chịu trách nhiệm đối với các gói hàng bị mất hoặc bị đánh cắp sau khi giao hàng. Nếu bạn vẫn không thể tìm thấy gói hàng của mình, bạn phải liên hệ với hãng vận chuyển để thảo luận về vấn đề này và nộp đơn khiếu nại với họ.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Thiệt hại và vấn đề</h2>
        <p className="text-gray-700 mb-2">
          Vui lòng quay video đơn hàng của bạn khi nhận và mở và liên hệ với chúng tôi ngay lập tức nếu sản phẩm bị lỗi, hư hỏng hoặc nếu bạn nhận được sai sản phẩm, để chúng tôi có thể đánh giá vấn đề và gửi cho bạn sản phẩm mới mà không mất phí.
        </p>
        <p className="text-red-600 font-semibold">
          CHÚNG TÔI KHÔNG HOÀN TIỀN/TRẢ HÀNG NHƯNG CHÚNG TÔI SẼ GỬI SẢN PHẨM MỚI TRONG TRƯỜNG HỢP SẢN PHẨM BỊ LỖI HOẶC SAI.
        </p>
      </section>
    </div>
  );
};

export default Policy;
