/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import{AbortException,AnnotationEditorParamsType,AnnotationEditorType,AnnotationMode,CMapCompressionType,createValidAbsoluteUrl,FeatureTest,ImageKind,InvalidPDFException,MissingPDFException,normalizeUnicode,OPS,PasswordResponses,PermissionFlag,shadow,UnexpectedResponseException,Util,VerbosityLevel}from"./shared/util.js";import{build,getDocument,PDFDataRangeTransport,PDFWorker,version}from"./display/api.js";import{DOMSVGFactory,fetchData,getFilenameFromUrl,getPdfFilenameFromUrl,getXfaPageViewport,isDataScheme,isPdfFile,noContextMenu,PDFDateString,PixelsPerInch,RenderingCancelledException,setLayerDimensions}from"./display/display_utils.js";import{renderTextLayer,TextLayer,updateTextLayer}from"./display/text_layer.js";import{AnnotationEditorLayer}from"./display/editor/annotation_editor_layer.js";import{AnnotationEditorUIManager}from"./display/editor/tools.js";import{AnnotationLayer}from"./display/annotation_layer.js";import{ColorPicker}from"./display/editor/color_picker.js";import{DrawLayer}from"./display/draw_layer.js";import{GlobalWorkerOptions}from"./display/worker_options.js";import{Outliner}from"./display/editor/outliner.js";import{XfaLayer}from"./display/xfa_layer.js";const pdfjsVersion="undefined"!=typeof PDFJSDev?PDFJSDev.eval("BUNDLE_VERSION"):void 0,pdfjsBuild="undefined"!=typeof PDFJSDev?PDFJSDev.eval("BUNDLE_BUILD"):void 0;export{AbortException,AnnotationEditorLayer,AnnotationEditorParamsType,AnnotationEditorType,AnnotationEditorUIManager,AnnotationLayer,AnnotationMode,build,CMapCompressionType,ColorPicker,createValidAbsoluteUrl,DOMSVGFactory,DrawLayer,FeatureTest,fetchData,getDocument,getFilenameFromUrl,getPdfFilenameFromUrl,getXfaPageViewport,GlobalWorkerOptions,ImageKind,InvalidPDFException,isDataScheme,isPdfFile,MissingPDFException,noContextMenu,normalizeUnicode,OPS,Outliner,PasswordResponses,PDFDataRangeTransport,PDFDateString,PDFWorker,PermissionFlag,PixelsPerInch,RenderingCancelledException,renderTextLayer,setLayerDimensions,shadow,TextLayer,UnexpectedResponseException,updateTextLayer,Util,VerbosityLevel,version,XfaLayer};