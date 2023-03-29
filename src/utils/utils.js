import QRCode from 'qrcode'

export async function getQRCode(url) {
  const _myQRCode = await QRCode.toDataURL(url)
  return _myQRCode
}