const fileInputCode = 
`<z-file-input
  formId="files"
  formKey="file"
  accept="image/*"
  prependIcon="mdi-file-excel-outline"
  action="http://zenghaitao/update-images"
  :effectData="{ 
    sysProTempId: '900709761157169152',
    proCode: 2
  }"
  :defaultValue="[
    {
      url: '',
      label: 'demo.png'
    }
  ]"
  name="tempImages"
  label="文件上传"
  parcel
  :multiple="false"
  :deleteIcon="false"
  @response="onResponse"
  @delete="onRemove"
  >
</z-file-input>`

export default {
  fileInputCode
}