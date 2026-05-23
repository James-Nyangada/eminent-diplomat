"use client";

const useSweetAlert = () => {
	const creteAlert = async (type, message) => {
		const Swal = (await import("sweetalert2")).default;
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-start",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			customClass: "z-xxxl",
			icon: type,
			title: message,
		});
	};
	return creteAlert;
};

export default useSweetAlert;
